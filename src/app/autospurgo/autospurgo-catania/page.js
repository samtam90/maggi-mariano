import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Catania",
    canonical: links.autospurgo["catania"],
});
export default withBaseProps({ 
    title: "Autospurgo Catania", 
    locationNames: {label: "Catania", href: "catania"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["catania"],
        name: "Catania",
    }),
});
