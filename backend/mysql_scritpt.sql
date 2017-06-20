create table cars (
	id integer not null primary key,
    model varchar(100) not null,
    color varchar(100) null,
    price varchar(20) null,
    is_sold varchar(100) null,
    sold_date DATE
);
create table users (
	id integer not null primary key,
    name varchar(100),
    gender ENUM('F','M') NOT NULL,
    user_type ENUM('SELLER','BUYER') NOT NULL
);
create table cars_users (
	id integer not null primary key,
    users_id integer not null,
    cars_id integer not null
);


