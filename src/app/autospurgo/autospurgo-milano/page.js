import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Milano",
    canonical: links.autospurgo["milano"],
});
export default withBaseProps({ 
    title: "Autospurgo Milano", 
    locationNames: {label: "Milano", href: "milano"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["milano"],
        name: "Milano",
    }),
});
