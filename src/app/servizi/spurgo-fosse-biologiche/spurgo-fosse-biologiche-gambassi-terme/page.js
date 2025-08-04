import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gambassi Terme",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});
