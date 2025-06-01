const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const comment = new Comment({
            ...req.body,
            author: req.user._id,
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getCommentsByTask = async (req, res) => {
    try {
        const comments = await Comment.find({ taskId: req.params.taskId }).populate('author');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment || !comment.author.equals(req.user._id)) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        comment.content = req.body.content;
        await comment.save();
        res.json(comment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment || (!comment.author.equals(req.user._id) && !req.user.isAdmin)) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await comment.delete();
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
