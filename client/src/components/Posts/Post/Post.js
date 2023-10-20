import React from 'react';
import { useDispatch } from 'react-redux';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';

import moment from 'moment';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setcurrentid }) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    return (
        <Card className={classes.card}>
            {/* TITLE */}
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>

            <div className={classes.overlay}>
                {/* CREATOR NAME */}
                <Typography variant="h6">{post.creator}</Typography>

                {/* TIME */}
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {/* The Edit button */}
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" 
                onClick={() => setcurrentid(post._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>

            {/* TAGS */}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            {/* TITLE */}
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

            {/* MESSAGE */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>


            <CardActions className={classes.cardActions}>
                {/* LIKE BUTTON */}
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount} </Button>

                {/* DELETE BUTTON */}
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>

        </Card>
    )
}

export default Post;