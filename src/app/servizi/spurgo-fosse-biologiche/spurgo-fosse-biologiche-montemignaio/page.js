import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montemignaio",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});
