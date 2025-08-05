import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cortona",
    canonical: links.autospurgo["cortona"],
});
export default withBaseProps({ 
    title: "Autospurgo Cortona", 
    locationNames: {label: "Cortona", href: "cortona"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
