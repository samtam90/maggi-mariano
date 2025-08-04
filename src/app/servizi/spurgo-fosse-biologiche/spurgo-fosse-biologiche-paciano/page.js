import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Paciano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});
