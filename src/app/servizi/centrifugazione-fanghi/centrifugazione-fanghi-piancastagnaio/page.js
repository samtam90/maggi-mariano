import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Piancastagnaio",
  canonical: links.servizi["centrifugazione-fanghi"]["piancastagnaio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Piancastagnaio",
  locationNames: { label: "Piancastagnaio", href: "piancastagnaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
