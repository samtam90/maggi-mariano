import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Belluno",
    canonical: links.autospurgo["belluno"],
});
export default withBaseProps({ 
    title: "Autospurgo Belluno", 
    locationNames: {label: "Belluno", href: "belluno"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["belluno"],
        name: "Belluno",
    }),
});
