delete from project_assignments;
delete from projects;


-- create table projects;
create table projects(
	proj_id serial,
	proj_createdon date,
	proj_duedate date,
	proj_cust_name varchar(100),
	constraint proj_id_pk primary key (proj_id)
);

create table project_assignment(
	pras_proj_id integer,
	pras_employee_id integer,
	pras_startdate date,
	pras_duedate date,
	pras_status varchar(15),
	constraint pras_proj_employee_pk primary key (pras_proj_id,pras_employee_id),
	constraint pras_proj_id_fk foreign key (pras_proj_id) references projects(proj_id),
	constraint pras_employee_id_fk foreign key (pras_employee_id) 
	references employees(employee_id)
);

-- nomor 2 add column
alter table projects
add column proj_description varchar(255),
add column proj_status varchar(15),
add column proj_amount numeric

-- nomor 3 add column proj_account_mgr
alter table projects 
add column proj_account_mgr integer

alter table projects
add constraint proj_account_mgr_fk foreign key (proj_account_mgr) 
	references employees(employee_id)

select * from employees where manager_id is null

select * from projects


insert into projects (proj_name,proj_createdon,proj_duedate,proj_customer,
					 proj_status,proj_amount,proj_account_mgr)
values('E-COMMERCE',now(),now()+ interval '90 day','TELKOMSEL','INPROGRESS',50000,100);

insert into projects (proj_name,proj_createdon,proj_duedate,proj_customer,
					 proj_status,proj_amount,proj_account_mgr)
values('TRAVELOKA',now(),now()+ interval '45 day','XL','INPROGRESS',45000,100);

insert into projects (proj_name,proj_createdon,proj_duedate,proj_customer,
					 proj_status,proj_amount,proj_account_mgr)
values('TIKET.COM',now(),now()+ interval '30 day','INDOSAT','INPROGRESS',35000,100);

insert into projects (proj_name,proj_createdon,proj_duedate,proj_customer,
					 proj_status,proj_amount,proj_account_mgr)
values('Air Bnb',now(),now()+ interval '30 day','PT.X','PENDING',35000,999);

-- insert into table project assignment
select * from project_assignments

select * from projects

select * from employees where department_id = 6

select * from departments


insert into project_assignments(pras_proj_id,pras_employee_id,pras_startdate,
							   pras_enddate,pras_status)
values (4,105,now(),null,'ASSIGNED');

insert into project_assignments(pras_proj_id,pras_employee_id,pras_startdate,
							   pras_enddate,pras_status)
values (4,106,now(),now()+interval '10 day','COMPLETED');

insert into project_assignments(pras_proj_id,pras_employee_id,pras_startdate,
							   pras_enddate,pras_status)
values (4,107,now(),null,'INPROGRESS');

select * from project_assignments