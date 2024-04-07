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
desc brand_details;
desc category_details;
desc bill_details;

select * from user_details;
select * from user_address;
select * from product_details;
select * from cart;
select * from cart_details;
select * from brand_details;
select * from category_details;
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
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP
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
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT address_user_unique UNIQUE (country, state, district, city, area, postal_code, house_no, user_id, status),
    CONSTRAINT status_unique UNIQUE (user_id, status),
    foreign key (user_id) references user_details(user_id)
);

CREATE TABLE brand_details
(
    brand_id integer primary key auto_increment,
    brand_name varchar(512) not null,
    brand_description varchar(1024) not null,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT brand_unique UNIQUE (brand_name)
);

CREATE TABLE category_details
(
    category_id integer primary key auto_increment,
    brand_id integer,
    category_name varchar(512) UNIQUE not null,
    category_description varchar(1024) not null,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT category_unique UNIQUE (category_name),
    foreign key (brand_id) references brand_details(brand_id)
);

CREATE TABLE product_details
(
    product_id integer primary key auto_increment,
    category_id integer,
    product_name varchar(512) UNIQUE not null,
    product_description varchar(1024) not null,
    product_image varchar(512) default 'no-image',
    product_cost float(10,2) not null,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT product_unique UNIQUE (product_name, product_cost),
    foreign key (category_id) references category_details(category_id)
);

CREATE TABLE cart
(
    cart_id integer primary key auto_increment,
    user_id integer,
    is_cart_confirmed boolean default false,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
    CONSTRAINT user_cart_unique UNIQUE (user_id, is_cart_confirmed),
    foreign key (user_id) references user_details(user_id)
);

CREATE TABLE cart_details
(
    cart_product_id integer primary key auto_increment,
    cart_id integer,
    product_id integer,
    quantity int(20) default 1,
    no_of_items int(50) default 1,
    total_bill float(9,2) default 0,
    created_time_stamp timestamp default CURRENT_TIMESTAMP,
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
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
    last_updated_time_stamp timestamp default CURRENT_TIMESTAMP,
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
drop table brand_details;
drop table category_details;
drop table bill_details;

truncate table user_details;
truncate table user_address;
truncate table product_details;
truncate table cart;
truncate table brand_details;
truncate table category_details;
truncate table cart_details;
truncate table bill_details;

--#################################################################
