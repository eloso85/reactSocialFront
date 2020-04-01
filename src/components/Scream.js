import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom';
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
//mui stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
        
    },
    images:{
        minWidth:200,
    },

    content:{
        padding:25,
    }
}

class Scream extends Component {
    render() {
        dayjs.extend(relativeTime)

        const { classes, scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props
        // const classes = this.props.classes
        return (
            <Card className={classes.card}>
            <CardMedia
              image={userImage}
              title="Profile image"
              className={classes.image}
            />
                <CardContent className={classes.content}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to={`/user/${userHandle}`}
                        color="secondary"
                    >
                        {userHandle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
                    <Typography variant="body1">{body}</Typography>

                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Scream)
