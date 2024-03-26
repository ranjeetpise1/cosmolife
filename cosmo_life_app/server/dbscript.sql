--================================================================
--                    database structure                        --
--================================================================

create database cosmolife;
use cosmolife;
show tables;

--================================================================
--                      select tables                           --
--================================================================

desc user_details;
desc user_address;
desc product_details;
desc cart;
desc cart_details;
desc bill_details;

select * from user_details;
select * from user_address;
select * from product_details;
select * from cart;
select * from cart_details;
select * from bill_details;

--================================================================
--                      create tables                           --
--================================================================

CREATE TABLE user_details
(
    user_id integer primary key auto_increment,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(100) unique,
    password varchar(1024),
    mobile_no varchar(20),
    user_role varchar(20) default "customer",
    active_status boolean default true,
    profile_photo varchar(512) default 'no_image',
    created_time_stamp timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE user_address
(
    add_id integer primary key auto_increment,
    country varchar(50),
    state varchar(50),
    district varchar(50),
    city varchar(50),
    area varchar(100),
    house_no int(50),
    postal_code int(10),
    user_id integer,
    status varchar(20) default 'profile',
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT address_user_unique UNIQUE (country, state, district, city, area, postal_code, house_no, user_id, status),
    CONSTRAINT status_unique UNIQUE (user_id, status),
    foreign key (user_id) references user_details(user_id)
);

CREATE TABLE product_details
(
    product_id integer primary key auto_increment,
    product_name varchar(512) UNIQUE not null,
    product_description varchar(1024) not null,
    product_image varchar(512) default 'no-image',
    product_cost float(10,2) not null,
    created_time_stamp timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE cart
(
    cart_id integer primary key auto_increment,
    user_id integer,
    is_cart_confirmed boolean default false,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    foreign key (user_id) references user_details(user_id)
);

CREATE TABLE cart_details
(
    cart_product_id integer primary key auto_increment,
    cart_id integer,
    product_id integer,
    no_of_items int(100) default 0,
    total_bill float(9,2) default 0,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    foreign key (product_id) references product_details(product_id),
    foreign key (cart_id) references cart(cart_id)
);

CREATE TABLE bill_details
(
    bill_id integer primary key auto_increment,
    user_id integer,
    cart_id integer,
    total_bill float(9,2) default 0,
    bill_status boolean default false,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    foreign key (user_id) references user_details(user_id),
    foreign key (cart_id) references cart_details(cart_id)
);

--================================================================
--                        drop tables                           --
--================================================================

drop table user_details;
drop table user_address;
drop table product_details;
drop table cart;
drop table cart_details;
drop table bill_details;

--#################################################################