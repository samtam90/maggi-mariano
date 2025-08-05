import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Sondrio",
    canonical: links.autospurgo["sondrio"],
});
export default withBaseProps({ 
    title: "Autospurgo Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["sondrio"],
        name: "Sondrio",
    }),
});
