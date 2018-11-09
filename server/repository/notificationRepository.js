import Model from '../models';
import notifyWorker from '../services/notifyWorker';

const { Notifications } = Model;

/**
 * Tag repository class
 */
class NotificationRepository {
  /**
 * Function to create a new notification
 * @param {object} notification
 * @returns {object} notification
 */
  static async createNotification(notification) {
    let content;
    let newNotification = {};
    switch (notification.type) {
      case 'NEW_ARTICLE_UPDATE':
        notification.notificationType = 'NEW_Article';
        break;
      case 'NEW_COMMENT_UPDATE':
        notification.notificationType = 'NEW_Comment';
        break;
      case 'NEW_REACTION_UPDATE':
        notification.notificationType = 'NEW_Reaction';
        break;
      default:
        content = null;
    }
    if (content === null) {
      return null;
    }
    newNotification = await Notifications.create(notification);
    notifyWorker(newNotification);
    return newNotification;
  }
}

export default NotificationRepository;
