-- no 1 
select r.region_id,region_name,country_id,country_name 
from regions r join countries c
on r.region_id=c.region_id
order  by r.region_id,country_id

--2
select r.region_id,region_name,count(c.country_id)total_countries
from regions r join countries c
on r.region_id=c.region_id
group by r.region_id,region_name
order  by r.region_id,region_name

select * from locations

select c.country_id,country_name,
location_id,street_address,postal_code,city,state_province
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
where r.region_id=1
order  by r.region_id,country_id,location_id

-- nomor 4
select * from departments where location_id in (
select 
location_id
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
where r.region_id=1)

-- nomor 5
select region_name,count(d.department_id) as total_department
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
join departments d on l.location_id = d.location_id
group by r.region_id,region_name
order by region_name


-- nomor 6
select country_name,count(d.department_id) as total_department
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
join departments d on l.location_id = d.location_id
group by c.country_id,country_name
order by country_name

-- nomor 7
select * from (
select country_name,count(d.department_id) as total_department
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
join departments d on l.location_id = d.location_id
group by c.country_id,country_name)t
where total_department =(
select max(total) from (
select count(d.department_id) as total
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
join departments d on l.location_id = d.location_id
group by c.country_id,country_name)t
)


-- nomor 8
select d.department_id,department_name,count(employee_id) total_emps 
from employees e
join departments d on e.department_id=d.department_id
where d.location_id in (select 
location_id
from regions r 
join countries c on r.region_id=c.region_id
join locations l on c.country_id = l.country_id 
where r.region_id=2)
group by d.department_id,department_name
order by count(employee_id)

-- nomor 10

select * from jobs

insert into employees
select 207 employee_id,'Dian' first_name,'Permana' last_name,'kangdcp@gmail.com' email,phone_number,
hire_date,9 job_id,15000 salary,100 manager_id, null department_id
from employees where manager_id is null

select * from employees e left join departments d
on e.department_id=d.department_id where e.department_id is null

-- nomor 10
select employee_id,first_name,last_name,salary,
extract(year from age(now(),hire_date)) masa_kerja,
case when extract(year from age(now(),hire_date)) >= 25 then salary * 5 
 when extract(year from age(now(),hire_date)) < 25 then salary * 2 end bonus
from employees


-- nomor 11
select masa_kerja,sum(bonus)bonus_per_masa_kerja from (
select employee_id,first_name,last_name,salary,
extract(year from age(now(),hire_date)) masa_kerja,
case when extract(year from age(now(),hire_date)) >= 25 then salary * 5 
 when extract(year from age(now(),hire_date)) < 25 then salary * 2 end bonus
from employees)t
group by masa_kerja
order by masa_kerja

-- nomor 11
select sum(mk_satu) "15 <= masa kerja <=25",
sum(mk_dua) " 25 <= masa kerja <=30",
sum(mk_tiga) "30 <= masa kerja <=35"
from (
select 
case when extract(year from age(now(),hire_date)) >= 15
and extract(year from age(now(),hire_date)) <=25
then count(employees) end mk_satu,
case when extract(year from age(now(),hire_date)) > 25
and extract(year from age(now(),hire_date)) <=30
then count(employees) end mk_dua,
case when extract(year from age(now(),hire_date)) > 30
and extract(year from age(now(),hire_date)) <=35
then count(employees) end mk_tiga
from employees
group by hire_date)t

select count(1) from employees

-- nomor 12
select department_id,department_name,
sum(COALESCE (mk_satu,null,0)) "15 <= masa kerja <=25",
sum(COALESCE (mk_dua,null,0)) " 25 <= masa kerja <=30",
sum(COALESCE (mk_tiga,null,0)) "30 <= masa kerja <=35" from(
select d.department_id,department_name,
case when extract(year from age(now(),hire_date)) >= 15
and extract(year from age(now(),hire_date)) <=25
then count(employee_id) end mk_satu,
case when extract(year from age(now(),hire_date)) > 25
and extract(year from age(now(),hire_date)) <=30
then count(employee_id) end mk_dua,
case when extract(year from age(now(),hire_date)) > 30
and extract(year from age(now(),hire_date)) <=35
then count(employee_id) end mk_tiga
from employees e
join departments d on e.department_id = d.department_id 
group by d.department_id,department_name,hire_date)t
group by department_id,department_name
order by department_name

select * from jobs where job_id in (9,6,1)

select 
sum(programmer) "total programmer",
sum(pa) "total public accountan",
sum(acc) "total acc" 
from (
select case when job_id = 9 then count(1) end programmer,
case when job_id = 1 then count(1) end pa,
case when job_id = 6 then count(1) end acc
from employees
group by job_id)t