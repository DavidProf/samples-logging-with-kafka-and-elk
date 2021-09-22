# samples-logging-with-kafka-and-elk

To run docker-compose only with fluentd & elk

> docker-compose -f .docker/simple/docker-compose.yml up -d

To test use

> curl http://localhost:80\?[1-10]

---

To run docker-compose only with fluentd & kafka & elk

> docker-compose -f .docker/kafka/docker-compose.yml up -d

To test use

> curl http://localhost:80\?[1-10]

## references

-   [Fluentd Docker](https://docs.fluentd.org/container-deployment/docker-compose)
-   [Fluentd Parse Data](https://docs.fluentd.org/configuration/parse-section)
-   [Kafka Connect](https://docs.confluent.io/platform/current/connect/index.html#:~:text=Kafka%20Connect%20is%20a%20free,Kafka%20Connect%20for%20Confluent%20Platform.)
-   [Kafka Connect with ELK](https://docs.confluent.io/kafka-connect-elasticsearch/current/overview.html)
