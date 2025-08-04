import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monza Brianza",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monza Brianza", 
  locationNames: {label: "Monza Brianza", href: "monza-brianza"} 
});
