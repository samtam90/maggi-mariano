import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Forlì-Cesena",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});
