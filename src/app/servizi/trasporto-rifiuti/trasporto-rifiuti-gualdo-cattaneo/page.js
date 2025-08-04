import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gualdo Cattaneo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});