import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Catanzaro",
    canonical: links.autospurgo["catanzaro"],
});
export default withBaseProps({ 
    title: "Autospurgo Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["catanzaro"],
        name: "Catanzaro",
    }),
});
