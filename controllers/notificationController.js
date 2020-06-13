const { Notification, NotificationCategory, User } = require('./../models');
module.exports = {
  // ------------------------------------------------------------------------------------------------
  list: async (req, res) => {
    try {
      let { limit = 10, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const conectedUser = 6;
      const { count:size, rows:notifications } = await Notification.findAndCountAll({
        where: {
          receiverId:conectedUser
        },
        attributes: ['id', 'read','elementId'],
        include: [
          {
            model: NotificationCategory,
            as: 'category',
            required: true,
            attributes: ['text', 'endPoint']
          },
          {
            model: User,
            as: 'user_sent',
            required: true,
            attributes:['id', 'name', 'avatar']
          },
        ],
        limit,
        offset: limit * page
      });
      res.status(200).json({ size, notifications });
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  delete: async (req, res) => {
    try {
      
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  
  // ------------------------------------------------------------------------------------------------
  edit: async (req, res) => {
    try {
      
    } catch (error) {
      res.status(401).json({ error });
    }
  }
  
};