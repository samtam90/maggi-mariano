import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Città della Pieve",
    canonical: links.autospurgo["città-della-pieve"],
});
export default withBaseProps({ 
    title: "Autospurgo Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
