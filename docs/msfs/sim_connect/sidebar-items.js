initSidebarItems({"attr":[["data_definition","Generate a struct which can be used with SimConnect's data definitions. ```rs #[sim_connect::data_definition] struct ControlSurfaces {     #[name = \"ELEVATOR POSITION\"]     #[unit = \"Position\"]     elevator: f64,     #[name = \"AILERON POSITION\"]     #[unit = \"Position\"]     ailerons: f64,     #[name = \"RUDDER POSITION\"]     #[unit = \"Position\"]     rudder: f64, }"]],"enum":[["SimConnectRecv","Message received from `SimConnect::get_next_dispatch`."]],"struct":[["SimConnect","A SimConnect session. This provides access to data within the MSFS sim."]],"trait":[["DataDefinition",""]],"type":[["Result",""],["SimConnectRecvCallback","Callback provided to SimConnect session."]]});