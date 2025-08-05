import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Imperia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["imperia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Imperia", 
    locationNames: {label: "Imperia", href: "imperia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
