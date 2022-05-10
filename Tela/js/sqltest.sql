-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE calculadoraSolar
GO
-- Select rows from a TabmaName'
-- Add a new column 'NewColumnName' to table 'TableName' in schema 'SchemaName'
-- Update rows in table 'TableName'
-- Insert rows into table 'TableName'
SELECT * FROM dbo.Usuarios
GO
INSERT INTO Usuarios
( -- columns to insert data into
 [Nome],[Sr(A).],[Email],[Senha],[Telefone])
VALUES
( -- first row: values for the columns in the list above
 N'Artur', 1, N'mlen@guijo.com',N'oiliu123',N'(31)99578-8221'
)
GO

-- Select rows from a Table or View 'TableOrViewName' in schema 'SchemaName'
SELECT * FROM dbo.Usuarios
GO