import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Brescia",
  canonical: links.servizi["centrifugazione-fanghi"]["brescia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Brescia",
  locationNames: { label: "Brescia", href: "brescia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
