INSERT INTO UserRole(id, modificationCounter, name, active) VALUES (0, 1, 'Customer', true);
INSERT INTO UserRole(id, modificationCounter, name, active) VALUES (1, 1, 'Waiter', true);
INSERT INTO UserRole(id, modificationCounter, name, active) VALUES (2, 1, 'Manager', true);

INSERT INTO UserRole(id, modificationCounter, name, active)
VALUES (3, 1, 'Admin', true);

INSERT INTO User(id, modificationCounter, username, password, twoFactorStatus, email, idRole)
VALUES (0, 1, 'user0', '{bcrypt}$2a$10$qPM1WjcRKAffHxWXYEfPJOh2vGPlT/Fdv.hJX/LaZjzg/Wtj2csqO', false,
        '1811954@stud.hs-mannheim.de', 0);
INSERT INTO User(id, modificationCounter, username, password, twoFactorStatus, email, idRole)
VALUES (1, 1, 'waiter', '{bcrypt}$2a$10$1CAKyUHbX6RJqT5cUP6/aOMTIlYYvGIO/a3Dt/erbYKKgmbgJMGsG', false,
        'waiter@mail.com', 1);
INSERT INTO User(id, modificationCounter, username, password, twoFactorStatus, email, idRole)
VALUES (2, 1, 'manager', '{bcrypt}$2a$10$IsTlZemkiPKE2gjtnSMlJOX5.uitNHXNRpLYyvyxNbHEhjpY.XdTq', false,
        'manager@mail.com', 2);

INSERT INTO User(id, modificationCounter, username, password, twoFactorStatus, email, idRole)
VALUES (3, 1, 'admin', '{bcrypt}$2a$10$1CAKyUHbX6RJqT5cUP6/aOMTIlYYvGIO/a3Dt/erbYKKgmbgJMGsG', false, 'admin@mail.com',
        3);
INSERT INTO User(id, modificationCounter, username, password, twoFactorStatus, email, idRole)
VALUES (4, 1, 'waiter2', '{bcrypt}$2a$10$1CAKyUHbX6RJqT5cUP6/aOMTIlYYvGIO/a3Dt/erbYKKgmbgJMGsG', false,
        'waiter2@mail.com', 1);


INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (0, 1, 4);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (1, 1, 4);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (2, 1, 4);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (3, 1, 4);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (4, 1, 6);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (5, 1, 6);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (6, 1, 6);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (7, 1, 8);
INSERT INTO mythai.Table(id, modificationCounter, seatsNumber)
VALUES (8, 1, 8);

