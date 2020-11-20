cloudctl es topic-create --name vaccine_orders --partitions 1 --replication-factor 3
cloudctl es topic-create --name reefer_telemetries --partitions 1 --replication-factor 3
cloudctl es topic-create --name vaccine_shipments --partitions 1 --replication-factor 3
cloudctl es topic-create --name vaccine_lots --partitions 1 --replication-factor 3
cloudctl es topic-create --name transportation --partitions 1 --replication-factor 3