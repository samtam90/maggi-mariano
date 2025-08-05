import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Badia Prataglia",
  canonical: links.servizi["centrifugazione-fanghi"]["badia-prataglia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Badia Prataglia",
  locationNames: { label: "Badia Prataglia", href: "badia-prataglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
