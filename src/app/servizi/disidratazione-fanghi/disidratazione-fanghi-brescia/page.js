import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Brescia",
  canonical: links.servizi["disidratazione-fanghi"]["brescia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Brescia",
  locationNames: { label: "Brescia", href: "brescia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
