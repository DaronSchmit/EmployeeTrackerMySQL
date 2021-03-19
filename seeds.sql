INSERT INTO department (dpname)
VALUES ('Sales'),
       ('Technician'),
       ('Human Resources'),
       ('Corporate');
       
INSERT INTO roles (title, salary, department_id)
     VALUES       ('Field Technician', '40000', 2),
                  ('Field Sales', '40000', 2),
                  ('Lead Technician', '55000', 2),
                  ('Tech Market Manager', '60000', 2),
                  ('Sales Market Manager', '70000', 1),
                  ('HR Lead', '125000', 3),
                  ('Legal Consultant', '250000', 4),
                  ('CEO', '1000000000', 4);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
       VALUES        ('Little', 'Dipper', 1, 3),
	                 ('Ursa', 'Minor', 1, 3),
                     ('Big', 'Dipper', 3, 4),
                     ('Star', 'Lord', 4, 10),
                     ('Mini', 'Money', 2, 7),
                     ('Other', 'Money', 2, 7),
                     ('Big', 'Money', 5, 10),
                     ('Dont do', 'anything dumb', 6, 10)
                     ('You did', 'something dumb', 7, 10)
                     ('Big', 'Kahuna', 8, null);