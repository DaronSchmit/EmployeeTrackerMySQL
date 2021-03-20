INSERT INTO department (dept_name)
VALUES                 ('Sales'),
                       ('Technician'),
                       ('Human Resources'),
                       ('Corporate');
       
INSERT INTO role (title, salary, department_id)
     VALUES       ('Field Technician', '40000', 2),
                  ('Field Sales', '40000', 2),
                  ('Lead Technician', '55000', 2),
                  ('Tech Market Manager', '60000', 2),
                  ('Sales Market Manager', '70000', 1),
                  ('HR Lead', '125000', 3),
                  ('Legal Consultant', '250000', 4),
                  ('CEO', '1000000000', 4);

INSERT INTO employee (first_name, last_name, role_id)
     VALUES          ('Big', 'Kahuna', 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
     VALUES          ('Star', 'Lord', 4, 1),
                     ('Big', 'Money', 5, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES         ('Dont do', 'anything dumb', 6, 1),
                     ('You did', 'something dumb', 7, 1),
                     ('Little', 'Dipper', 1, 2),
	                 ('Ursa', 'Minor', 1, 2),
                     ('Big', 'Dipper', 3, 2),
                     ('Mini', 'Money', 2, 3),
                     ('Other', 'Money', 2, 3);