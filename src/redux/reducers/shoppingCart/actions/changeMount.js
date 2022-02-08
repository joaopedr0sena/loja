export const CHANGE_MOUNT = 'CHANGE_MOUNT';

const changeMount = (id, mount) => ({ type: CHANGE_MOUNT, id, mount });

export default changeMount;
