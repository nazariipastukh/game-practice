export const Logs = ({turnLogs}) => {
    return (
        <ol id='log'>
            {
                turnLogs.map(log => <li className={'highlighted'}>{log.player}, {log.square.row}:{log.square.col}</li>)
            }
        </ol>
    );
};