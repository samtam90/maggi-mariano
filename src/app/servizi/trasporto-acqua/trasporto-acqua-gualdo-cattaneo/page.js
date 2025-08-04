import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Gualdo Cattaneo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});