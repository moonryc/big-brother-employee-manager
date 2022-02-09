INSERT INTO department (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales');

INSERT INTO role (title,salary,department_id)
VALUES ('Engineer',10000,1),
       ('Finaceer',1000,2),
       ('Legaler',100,3),
       ('Salezer',10,4);

INSERT INTO employee (first_name,last_name ,role_id,manager_id)
VALUES ('ryan','moon',1,2),
       ('Mr','CEO',1,null),
       ('travis','anderson',2,1),
       ('sara','anakazam',4,2),
       ('zoey','owah',3,4);