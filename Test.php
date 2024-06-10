<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fruits and Legumes List</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="test.css">

</head>
<body>
    <header>
        <form id="itemForm">
            <label for="itemInput">Fruits or Legumes:</label>
            <input type="text" id="itemInput" name="itemInput" class="form-control">
            <input type="radio" id="fruit" name="itemType" value="fruit">
            <label for="fruit">Fruit</label>
            <input type="radio" id="legume" name="itemType" value="legume">
            <label for="legume">Legume</label>
            <button type="button" id="addToSpecificList" class="btn btn-info">Add to Specific List</button>
            <button type="button" id="addToGeneralList" class="btn btn-secondary">Add to General List</button>
        </form>
    </header>

    <div class="controls">
        <input type="text" id="searchInput" placeholder="Search for an item" class="form-control">
        <button id="searchItem" class="btn btn-primary">Search for Item</button>
        <button id="deleteItem" class="btn btn-danger">Delete an Item</button>
    </div>

    <div class="lists">
        <div class="column">
            <h3>Fruits List</h3>
            <ul id="fruitsList" class="list-container"></ul>
        </div>
        <div class="column">
            <h3>General List</h3>
            <ul id="generalList" class="list-container"></ul>
        </div>
        <div class="column">
            <h3>Legumes List</h3>
            <ul id="legumesList" class="list-container" ></ul>
        </div>
    </div>

    <script src="test.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
