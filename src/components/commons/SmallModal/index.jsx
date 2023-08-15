import PropTypes from 'prop-types';

const SmallModal = (props) => {
    const {message,title} = props;
    return (
        <>
        <div id="smallModalMessage" className="modal fade show">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                </div>
            </div>
        </div>
            <script type="text/javascript">
                var myModal = new bootstrap.Modal(document.getElementById('smallModalMessage'));

                myModal.show();
            </script>
        </>
    );
};

SmallModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
}

export default SmallModal;