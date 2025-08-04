import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Dicomano",
  canonical: links.servizi["noleggio-bagni-chimici"]["dicomano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Dicomano", 
  locationNames: {label: "Dicomano", href: "dicomano"} 
});
