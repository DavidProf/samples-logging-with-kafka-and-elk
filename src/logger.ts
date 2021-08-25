import * as winston from 'winston'

winston.addColors({
    emerg: 'bold red',
    alert: 'red',
    crit: 'red',
    error: 'red',
    warning: 'yellow',
    notice: 'yellow',
    info: 'green',
    debug: 'blue',
})

export const logger = winston.createLogger({
    levels: {
        ...winston.config.syslog.levels,
        warn: winston.config.syslog.levels.warning,
        emergency: winston.config.syslog.levels.emerg,
    },
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.simple(),
                winston.format.printf((info) => {
                    const { level, message } = info

                    return `${new Date().toISOString()} [${level}]: ${message}`
                })
            ),
        }),
    ],
})
// logger.add(new winston.transport())
