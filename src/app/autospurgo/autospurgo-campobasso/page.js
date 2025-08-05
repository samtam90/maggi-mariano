import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Campobasso",
    canonical: links.autospurgo["campobasso"],
});
export default withBaseProps({ 
    title: "Autospurgo Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["campobasso"],
        name: "Campobasso",
    }),
});
