let charactersModel = require(`./models`);

module.exports = {
  /*
   * GET all data
   */
  list: (req, res) => {
    charactersModel.find((err, characters) => {
      if (err) {
        // Status : Internal server error
        return res.status(500).json({
          message: `Error when getting characters`,
          error: err
        });
      }
      return res.json({
        // Status : OK
        message: `Here's your characters`,
        data: characters
      });
    });
  },

  /*
   * GET by id
   */
  show: (req, res) => {
    const id = req.params.id;
    charactersModel.findOne({
      _id: id
    }, (err, character) => {
      if (err) {
        // Status : Internal server error
        return res.status(500).json({
          message: `Error when getting character`,
          error: err
        });
      }
      if (!character) {
        // Status : Not Found
        return res.status(404).json({
          message: `No such character`
        });
      }
      return res.json({
        // Status : OK
        message: `You choose a character`,
        data: character
      });
    });
  },

  /*
   * POST one
   */
  create: (req, res) => {
    let character = new charactersModel({
      name: req.body.name,
      age: req.body.age,
      style: req.body.style,
      xp: req.body.xp,
      type: req.body.type
    });

    character.save((err, character) => {
      if (err) {
        // Status : Internal server error
        return res.status(500).json({
          message: `Error when creating character`,
          error: err
        });
      }
      return res.status(201).json({
        // Status : Created
        message: `Created a new character`,
        data: character
      });
    });
  },

  /*
   * PUT by id
   */
  update: (req, res) => {
    let id = req.params.id;
    charactersModel.findOne({
      _id: id
    }, (err, character) => {
      if (err) {
        // Status : Internal server error
        return res.status(500).json({
          message: `Error when getting character`,
          error: err
        });
      }
      if (!character) {
        // Status : Not Found
        return res.status(404).json({
          message: `No such character`
        });
      }
      character.name = req.body.name ? req.body.name : character.name;
      character.age = req.body.age ? req.body.age : character.age;
      character.style = req.body.style ? req.body.style : character.style;
      character.xp = req.body.xp ? req.body.xp : character.xp;
      character.type = req.body.type ? req.body.type : character.type;

      character.save((err, character) => {
        if (err) {
          // Status : Internal server error
          return res.status(500).json({
            message: `Error when updating character`,
            error: err
          });
        }
        return res.json({
          // Status : OK
          message: `Your character has been updated`,
          data: character
        });
      });
    });
  },

  /*
   * DELETE by id
   */
  remove: (req, res) => {
    let id = req.params.id;
    charactersModel.findByIdAndRemove(id, (err, character) => {
      if (err) {
        // Status : Internal server error
        return res.status(500).json({
          message: `Error when deleting character`,
          error: err
        });
      }
      // Status : No Content
      return res.status(204).json();
    });
  }
};