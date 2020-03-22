import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3>Username: {props.username}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tempor augue, sed tempor dolor. Phasellus rutrum metus vel lorem finibus, et fringilla eros lacinia. Donec eleifend orci ut mi condimentum condimentum. Pellentesque risus enim, accumsan a orci convallis, auctor hendrerit erat. Donec luctus pretium convallis. Sed fermentum feugiat volutpat. Vestibulum pretium quam nec velit congue, ut viverra nulla sagittis. Quisque non nisl eget dolor iaculis varius. Duis nec iaculis eros. Etiam in metus quis ipsum fermentum pulvinar tincidunt a elit. Nullam sit amet feugiat mauris, semper accumsan dolor. Aliquam mi ligula, varius nec dictum quis, sollicitudin vel neque. Mauris ultrices lacinia felis id gravida. Donec nec augue vel mauris lobortis sodales ut sed neque.
            </p>
            <p>
                Suspendisse feugiat laoreet feugiat. In viverra consectetur nulla, at sollicitudin neque ullamcorper at. Donec pharetra in turpis eu varius. Nunc commodo efficitur nisl non venenatis. Praesent ut volutpat libero. Donec porttitor sapien velit, id molestie lacus pharetra eget. Cras id odio sit amet lacus auctor accumsan. Cras vestibulum porttitor lacus. Praesent sit amet aliquam lacus, ut ornare nulla.
            </p>
        </div>
    )
};
export default userOutput;