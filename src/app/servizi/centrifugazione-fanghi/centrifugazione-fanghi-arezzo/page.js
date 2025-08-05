import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Arezzo",
  canonical: links.servizi["centrifugazione-fanghi"]["arezzo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
