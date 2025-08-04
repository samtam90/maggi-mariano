import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Forlì-Cesena",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Forlì-Cesena", 
  locationNames: {label: "Forlì-Cesena", href: "forli-cesena"} 
});
