import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Bologna",
    canonical: links.autospurgo["bologna"],
});
export default withBaseProps({ 
    title: "Autospurgo Bologna", 
    locationNames: {label: "Bologna", href: "bologna"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["bologna"],
        name: "Bologna",
    }),
});
