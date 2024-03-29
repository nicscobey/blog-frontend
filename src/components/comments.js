import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Comments = () => {
    return (
        <div>
            <h1>Comments Section</h1>
            <div className="reply">
                <div className="reply-top">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="reply-author" className="reply-author-img" />
                    <div className="reply-right">
                        <div className="reply-published">
                            <b><p className="no-margin">Username</p></b>
                            <p className="no-margin">Month ##, ####</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex-center">
                    <div className="reply-button">
                        <IconButton><ThumbUpIcon /></IconButton>#
                    </div>
                    <div className="reply-button">
                        <IconButton><ThumbDownIcon /></IconButton>#
                    </div>
                    <div className="reply-button">
                        <IconButton><ChatBubbleIcon /></IconButton>Reply
                    </div>
                    <div className="reply-button">
                        <IconButton><EditIcon /></IconButton>Edit
                    </div>
                    <div className="reply-button">
                        <IconButton><DeleteIcon /></IconButton>Delete
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Comments