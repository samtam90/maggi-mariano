import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monterchi",
  canonical: links.servizi["centrifugazione-fanghi"]["monterchi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monterchi",
  locationNames: { label: "Monterchi", href: "monterchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
