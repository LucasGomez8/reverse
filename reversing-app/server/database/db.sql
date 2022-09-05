create database reversing

use reversing

create table users(
	user_id bigint not null auto_increment,
	email text not null,
	user_pass text not null,
	user_nombre text,
	user_apellido text,
	unique(email, user_pass),
	primary key (user_id)
)