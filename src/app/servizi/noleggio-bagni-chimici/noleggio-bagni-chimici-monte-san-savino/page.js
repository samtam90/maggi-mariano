import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monte San Savino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monte San Savino", 
  locationNames: {label: "Monte San Savino", href: "monte-san-savino"} 
});
